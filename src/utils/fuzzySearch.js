/**
 * Levenshtein distance — measures how "close" two strings are.
 * Returns the number of edits (insert/delete/replace) needed.
 */
export function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

/**
 * Fuzzy-search products by query.
 * Returns { exact: Product[], fuzzy: Product[], didYouMean: string|null }
 *
 * Strategy:
 *  1. Exact substring match → "exact" bucket
 *  2. Word-level Levenshtein ≤ 2 on any token → "fuzzy" bucket
 *  3. If no exact, pick the closest overall word as didYouMean suggestion
 */
export function fuzzySearch(products, rawQuery) {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return { exact: products, fuzzy: [], didYouMean: null };

  const queryTokens = query.split(/\s+/);

  // Build a pool of all searchable words from all products
  const allWords = new Set();
  products.forEach((p) => {
    const text = `${p.name} ${p.nameHighlight} ${p.tagline} ${p.description}`.toLowerCase();
    text.split(/\s+/).forEach((w) => allWords.add(w));
  });

  const exact = [];
  const fuzzy = [];

  products.forEach((p) => {
    const text = `${p.name} ${p.nameHighlight} ${p.tagline} ${p.description}`.toLowerCase();
    const isExact = queryTokens.every((qt) => text.includes(qt));

    if (isExact) {
      exact.push(p);
      return;
    }

    // Fuzzy: any query token within edit-distance 2 of any word in the product text
    const productWords = text.split(/\s+/);
    const isFuzzy = queryTokens.some((qt) =>
      productWords.some((pw) => {
        if (Math.abs(pw.length - qt.length) > 3) return false;
        return levenshtein(qt, pw) <= 2;
      })
    );
    if (isFuzzy) fuzzy.push(p);
  });

  // Did-you-mean: find the closest word in the pool to the last query token
  let didYouMean = null;
  if (exact.length === 0) {
    const lastToken = queryTokens[queryTokens.length - 1];
    let bestWord = null, bestDist = Infinity;
    allWords.forEach((w) => {
      if (Math.abs(w.length - lastToken.length) > 4) return;
      const d = levenshtein(lastToken, w);
      if (d < bestDist && d <= 3 && d > 0) {
        bestDist = d;
        bestWord = w;
      }
    });
    if (bestWord) didYouMean = bestWord;
  }

  return { exact, fuzzy, didYouMean };
}
