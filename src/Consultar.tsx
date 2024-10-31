import React, { useEffect, useState } from 'react';
import { Respuesta } from './types';

const Consultar: React.FC = () => {
    const [data, setData] = useState<Respuesta>(Object);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [codigo, setCodigo] = useState<string>('');
    const [opcion, setOpcion] = useState<string>('');

    const handleSubmit = async (cod:string,opcion:string) => {
        try {
            const response = await fetch(`https://api.cnelep.gob.ec/servicios-linea/v1/notificaciones/consultar/${cod}/${opcion}`);
            if (!response.ok) {
              throw new Error('Error en la solicitud');
            }
            const data: Respuesta = await response.json();
            setData(data);
          } catch (error) {
            setError((error as Error).message);
          } finally {
            setLoading(false);
          }
        console.log(`Código: ${codigo}, Opción seleccionada: ${opcion}`);
      };
  
    return (
    <>
      <div>
        <label htmlFor="cod">Código:</label>
        <input
          type="text"
          id="cod"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="options">Selecciona una opción:</label>
        <select
          id="options"
          value={opcion}
          onChange={(e) => setOpcion(e.target.value)}
          required
        >
          <option value="">--Seleccione una opción--</option>
          <option value="CUENTA_CONTRATO">Cuenta Contrato</option>
          <option value="CUEN">Código Único (CUEN)</option>
          <option value="IDENTIFICACION">Cédula</option>
        </select>
      </div>
      <button type="button" onClick={() => handleSubmit(codigo, opcion)}>Enviar</button>
      
      <div>
        {data?.notificaciones.map((resp) => (
            <li key={resp.cuentaContrato}>{resp.cuentaContrato}</li>
        ))}
        </div>

      </>
    );
  };
  
  export default Consultar;