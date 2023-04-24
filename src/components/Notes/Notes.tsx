import Note from "./Note"


const Notes = () => {

    const notes = [{numero: 1}, {numero: 1}, {numero: 1}, {numero: 1}, {numero: 1}, {numero: 1}, {numero: 1}, {numero: 1},]

    return (
        <div className="table__container">
            <table className="table__notes">
                <tr>
                    <th>#</th>
                    <th>Nota</th>
                    <th>Nivel de Importancia</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
                {
                    notes.map(note => <Note {...note} />)
                }
            </table>

        </div>
    )
}

export default Notes
