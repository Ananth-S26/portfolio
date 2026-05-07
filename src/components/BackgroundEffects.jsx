export default function BackgroundEffects() {
  return (
    <>
      <div className="bus-line w-1/2 top-[15%]" style={{ left: 0 }}></div>
      <div className="bus-line w-full top-[45%]" style={{ left: "20%" }}></div>
      <div className="bus-line-v h-screen left-[15%] opacity-40 dark:opacity-20"></div>
      <div className="bus-line-v h-screen right-[10%] opacity-20 dark:opacity-10"></div>
    </>
  );
}
