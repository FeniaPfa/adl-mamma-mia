import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

export const useFetch = () => {
    const { setPizzasState, pizzasState } = useGlobalContext()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const getData = async () => {
        setLoading(true);
        try {
            const res = await fetch('pizzas.json');
            if (!res.ok) {
                throw {
                    msg: 'Falló el consumo de la api',
                    error: res.status,
                };
            }
            const db = await res.json();
            setData(db);

            const initialPizzas = db.map((item) => ({
                id: item.id,
                quantity: 0,
                unitaryTotal: 0,
            }));
            
            setPizzasState(initialPizzas)

        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);

        }
    };
    useEffect(() => {
        getData();
    }, []);
    
    return {
        data,
        loading,
        error,
        // pizzasState
    };
};
