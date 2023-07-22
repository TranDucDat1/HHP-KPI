interface HeaderProps {
    color: string
}

export default function Header(props: HeaderProps) {
  return (
    <div
      style={{
        backgroundColor: props.color ? props.color : 'white',
        textAlign: "center",
        color: "#fff",
        height: 64,
        paddingInline: 50,
        lineHeight: "64px",
      }}
    > 
      Your Header
    </div>
  );
}
