import React from 'react'

export default class tabelaIMC extends React.Component{
  render(){
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
        <thead>
          <tr>
            <th>
              Classificação
            </th>
            <th>
              IMG
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo do Peso</td>
            <td>Abaixo do 18,5</td>
          </tr>
          <tr>
            <td>Peso Normal</td>
            <td>Entre 18,5 e 24,9</td>
          </tr>
          <tr>
            <td>Sobrepeso</td>
            <td>Entre 25 e 29,9</td>
          </tr>
          <tr>
            <td>Obesidade Grau I</td>
            <td>Entre 30 e 34,9</td>
          </tr>
          <tr>
            <td>Obesidade Grau II</td>
            <td>Entre 35 e 39,9</td>
          </tr>
          <tr>
            <td>Obesidade Grau III ou Mórbida</td>
            <td>Maior que 40</td>
          </tr>
          
        </tbody>
  
      </table>
    )
  }
}