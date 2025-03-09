function App() {
    const squareStyle: React.CSSProperties = {
        width: '200px',
        height: '200px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };
    return (
        <div style={squareStyle}></div>
    )
}

export default App
