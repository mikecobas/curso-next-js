export const DarkLayout = (props: any) => {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.3)",
        borderRadius: 3,
        padding: 10,
      }}
    >
      <h3>Dark</h3>
      {props.children}
    </div>
  );
};
