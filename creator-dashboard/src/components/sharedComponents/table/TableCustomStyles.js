export const cellStyles = {
  color: "red",
  fontSize: "16px",
  color: "#4b4d52",
};

export function TableBtn({ status }) {
  return (
    <button
      className={
        status === "approved"
          ? "approved"
          : status === "pending"
          ? "pending"
          : status === "rejected" && "rejected"
      }
    >
      {status}
    </button>
  );
}

export function TableTitle({ name }) {
  return <span className="thead">{name}</span>;
}
