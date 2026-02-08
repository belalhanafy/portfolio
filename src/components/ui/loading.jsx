export default function Loader() {
    return (
        <div
            style={{
                height: "100vh",
                display: "grid",
                placeItems: "center",
                background: "#000",
            }}
        >
            <img
                src="/loading.gif"
                alt="Loading..."
                style={{
                    width: "clamp(300px, 60vw, 1000px)"
                }}
            />
        </div>
    );
}
