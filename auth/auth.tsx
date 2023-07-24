interface AuthProps {}

const getStaticProps = async () => {};
export default function Auth(props: AuthProps) {
    return <>{props.children}</>;
}
