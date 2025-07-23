import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#e429c0"
          attach="material"
          distort={0.4}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={7} />
      <directionalLight position={[2, 2, 3]} />
    </>
  );
};

export default Shape;