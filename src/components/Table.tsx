export function Table(){
    return (
        <div>
            <table className="p-5 bg-blue-600 w-screen">
                <tr className="bg-green-400">
                    <th className="p-3 bg-black">Name</th>
                    <th>Status</th>
                    <th>Grade 1</th>
                    <th>Grade 2</th>
                    <th>Final Grade</th>
                </tr>
                <tr>
                    <td className="p-5">Fulano</td>
                    <td>Active</td>
                    <td>7.3</td>
                    <td>8.1</td>
                    <td>7.7</td>
                    
                </tr>
            </table>
        </div>
    );
}