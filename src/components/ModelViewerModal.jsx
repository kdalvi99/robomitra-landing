import { useEffect, useMemo, useRef } from "react";
import { X } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

function ModelViewerModal({ open, title = "3D Model", src, onClose }) {
  const mountRef = useRef(null);
  const loader = useMemo(() => new STLLoader(), []);

  const canRender = open && typeof src === "string" && src.length > 0;

  useEffect(() => {
    if (!canRender) return;
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
    camera.position.set(0.8, 0.5, 1.2);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 0.2;
    controls.maxDistance = 8;

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(2, 2, 2);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 0.35);
    fill.position.set(-2, 1, -1);
    scene.add(fill);

    let model = null;
    let animationFrameId = null;
    let disposed = false;

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    window.addEventListener("resize", resize);
    window.addEventListener("keydown", onKeyDown);
    resize();

    loader.load(
      src,
      (geometry) => {
        if (disposed) return;
        geometry.computeVertexNormals();
        geometry.center();

        const material = new THREE.MeshStandardMaterial({
          color: 0x9aa4b2,
          metalness: 0.25,
          roughness: 0.5,
        });

        model = new THREE.Mesh(geometry, material);
        scene.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const fitDist = maxDim * 1.6;

        camera.position.set(center.x + fitDist, center.y + fitDist * 0.7, center.z + fitDist);
        controls.target.copy(center);
        controls.update();
      },
      undefined,
      () => {}
    );

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      disposed = true;
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", onKeyDown);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);

      controls.dispose();
      if (model) {
        scene.remove(model);
        model.geometry?.dispose?.();
        model.material?.dispose?.();
      }
      renderer.dispose();
      renderer.domElement?.remove?.();
    };
  }, [canRender, loader, onClose, src]);

  if (!open) return null;

  return (
    <div className="model-modal-backdrop" role="dialog" aria-modal="true" aria-label={title}>
      <button className="model-modal-close" type="button" onClick={onClose} aria-label="Close 3D viewer">
        <X size={20} />
      </button>

      <div className="model-modal">
        <div className="model-modal-header">
          <h3>{title}</h3>
          <p>Drag to rotate, scroll to zoom.</p>
        </div>
        <div className="model-modal-canvas" ref={mountRef} />
      </div>

      <button className="model-modal-backdrop-hit" type="button" onClick={onClose} aria-label="Close" />
    </div>
  );
}

export default ModelViewerModal;
