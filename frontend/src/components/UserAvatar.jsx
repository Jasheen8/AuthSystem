export default function UserAvatar({ name }) {
  const letter = name?.charAt(0)?.toUpperCase();

  return (
    <div
      style={{
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        background: "#3b82f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
      }}
    >
      {letter}
    </div>
  );
}
