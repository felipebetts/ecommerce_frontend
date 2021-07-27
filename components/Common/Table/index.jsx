import { useEffect } from "react"
import Button from "../Button"
import { StyledTable } from "./styles"


const Table = ({ data, headers }) => {

    useEffect(() => {
        console.log('data: ', data)
    }, [data])

    return (
        <StyledTable>
            <thead>
                <tr>
                    {headers && headers.map((e, i) => (
                        <th>{ e }</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                { data && data.map((e, i) => (
                    <tr>
                        { Object.keys(e).map((el, idx) => {
                            if (el === 'Quantidade') {
                                return (
                                    <td>
                                        <Button 
                                            secondary
                                            padding='0 4px'
                                            height='24px'
                                            margin='8px'
                                            > 
                                            -
                                        </Button>
                                        { e[el] } 
                                        <Button 
                                            // secondary
                                            padding='0 4px'
                                            margin='8px'
                                            height='24px'
                                        > 
                                            +
                                        </Button>
                                    </td>
                                )
                            } else {
                                return (
                                    <td>{ e[el] }</td>
                                )
                            }
                        })}
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    )
}

export default Table