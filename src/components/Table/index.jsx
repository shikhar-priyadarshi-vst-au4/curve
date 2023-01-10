const getTableHeaders = (headers) => {
    return <tr>
        {headers?.map((header, index) => <th key={`th-${index}`} className="border-b border-gray-400 font-medium text-sm">
            <span>{header?.columnLabel}</span>
        </th>)}
    </tr>
}

const TableBodyRow = ({row, cols}) => {
    return <>
    <tr>
        {cols?.map((col, key) => (
            <>
                <td key={key} className="border-b border-gray-300 py-3">{col.render(row)}</td>
            </>))}
    </tr>
    </>
}

export default function Table(tableProps){
    const {
            cols, 
            data,  
            preloading, 
            ...props} = tableProps;
    return <div>
        <table {...props} className="w-full">
            <thead>
                {getTableHeaders(cols)}
            </thead>
            <tbody>
                {preloading ?
                 <tr>
                    <td colSpan={cols?.length}>
                        <div style={{height : "80px", display : "flex", justifyContent : "center",alignItems : "center"}}>
                            <div className="text-center my-4">
                                <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        </div>
                    </td>
                 </tr> : 
                 data?.length > 0 ? data?.map((row, index) =>
                    <TableBodyRow key={index} {...{row, cols}}/>) :
                    <tr>
                    <td colSpan={cols?.length}>
                        <div style={{height : "80px", display : "flex", justifyContent : "center",alignItems : "center"}}>
                            <div className="text-center my-4">
                                No Records Found
                            </div>
                        </div>
                    </td>
                 </tr>} 
            </tbody>
        </table>
    </div>
}
