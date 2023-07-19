import "./Spinner.css"

const Spinner = () => {
    return (
        <>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
            <div className="text-spinner">
                <p>Sin resultados</p>
            </div>
        </>
    )
}

export default Spinner