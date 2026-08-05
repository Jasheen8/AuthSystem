export default function RoleBadge({
 role
}) {

 return (
  <span
   style={{
    background:
     role === "admin"
      ? "#ef4444"
      : "#22c55e",

    padding:
      "5px 12px",

    borderRadius:
      "20px"
   }}
  >
   {role}
  </span>
 );
}