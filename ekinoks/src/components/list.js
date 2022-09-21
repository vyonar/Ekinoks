<table>
                <th>header</th>
                {['Birinci', 'ikinci', 'üçüncü'].map(el => <tr style={{backgroundColor: selected === el?'red':'white'}} onClick={() => handleSelect(el)}>{el}</tr>)}
            </table>
