import { useState } from 'react';
import { derivative, parse } from 'mathjs';
import './styles/Actividad.css';
interface objeto {
    iteracion: 0,
    a: 0,
    b: 0,
    funcionA: 0,
    funcionB: 0,
    p: 0,
    funcionP: 0
}

const Actividad = () => {
    const [metodo, setMetodo] = useState(0);
    const [iteraciones, setIteraciones] = useState<Array<any>>([]);
    const [iteracionesR, setIteracionesR] = useState<Array<any>>([]);
    const [iteracionesJ, setIteracionesJ] = useState<Array<any>>([]);
    const [valor, setValor] = useState<any>({ ecuacion: '', iniciala: '', inicialb: '' });
    const [isBiseccion, setisBiseccion] = useState<Boolean>(false);
    const [isNewton, setisNewton] = useState<Boolean>(false);
    let ecuacions: any;

    const _absoluto = (x: any) => {
        if (x < 0) {
            return -x;
        }
        return x;
    }
    const metodoBiseccion = (a: number, b: number) => {
        let p = 0;
        let contador = 0;
        let error = 0.0001;
        let it: Array<objeto> = [];
        if (ecuacions.evaluate({ x: a }) * ecuacions.evaluate({ x: b }) < 0) {
            for (let index = 0; index < 10000; index++) {
                contador++;
                p = (a + b) / 2;
                if (_absoluto(ecuacions.evaluate({ x: p })) <= error) {
                    let objeto: any = {
                        iteracion: contador,
                        a: a,
                        b: b,
                        funcionA: ecuacions.evaluate({ x: a }),
                        funcionB: ecuacions.evaluate({ x: b }),
                        p: p,
                        funcionP: ecuacions.evaluate({ x: p })
                    }
                    it.push(objeto);
                    return it;
                } else {
                    let objeto: any = {
                        iteracion: contador,
                        a: a,
                        b: b,
                        funcionA: ecuacions.evaluate({ x: a }),
                        funcionB: ecuacions.evaluate({ x: b }),
                        p: p,
                        funcionP: ecuacions.evaluate({ x: p })
                    }
                    if (ecuacions.evaluate({ x: a }) * ecuacions.evaluate({ x: p }) < 0) {
                        b = p;
                    }
                    if (ecuacions.evaluate({ x: p }) * ecuacions.evaluate({ x: b }) < 0) {
                        a = p;
                    }
                    if (p >= 8) {
                        alert("Proporcione a y b adecuados");
                        return
                    }
                    it.push(objeto);
                }
            }

        }
    }
    const metodoRaphson = (a: number) => {
        let iteracion = 100000;
        let contador = 0;
        let it: Array<objeto> = [];
        while (_absoluto(ecuacions.evaluate({ x: a })) > 0.001 && iteracion >= 0) {
            let valorInicial = a;
            a = a - ecuacions.evaluate({ x: a }) / derivative(ecuacions, 'x').evaluate({ x: a });
            let objeto: any = {
                iteracion: contador,
                xi1: valorInicial,
                fxi1: ecuacions.evaluate({ x: valorInicial }),
                fxi: derivative(ecuacions, 'x').evaluate({ x: valorInicial }),
                xi: a
            };
            it.push(objeto);
            iteracion = iteracion - 1;
            contador++
        }
        return it;
    }
    const metodoJacobi=(a:number,b:number,c:number)=>{
        console.log("pendiente")
    }
    const calcular = (event: any) => {
        event.preventDefault();
        ecuacions = parse(valor.ecuacion);
        if (metodo === 1) {
            const response = metodoBiseccion(parseFloat(valor.iniciala), parseFloat(valor.inicialb));
            if (response?.length) {
                setIteraciones(response);
            } else {
                alert("Proporcione a y b adecuados");
            }
        }
        if (metodo === 2) {
            const response = metodoRaphson(parseFloat(valor.iniciala));
            if (response?.length) {
                setIteracionesR(response);
            } else {
                alert("Proporcione a adecuado");
            }
        }
        if(metodo===3){

        }
    }
    const handleChange = (event: any) => {
        const select = parseInt(event.target.value);
        if (select === 1) {
            setisNewton(true)
            setisBiseccion(true)
        }
        if (select === 2) {
            setisNewton(true)
            setisBiseccion(false)
        }
        if (select === 3) {
            setisNewton(true)
            setisBiseccion(false)
        }
        if (select === 4) {
            setisNewton(true)
            setisBiseccion(false)
        }
        setIteracionesR([]);
        setIteraciones([]);
        setMetodo(select);
    };
    const cambioInput = ({ target }: any) => {
        setValor({ ...valor, [target.name]: target.value });
    }
    return (
        <>
            <div className="Actividades__container">
                <form onSubmit={calcular}>
                    <div className="mb-3">
                        <label className="form-label">Ecuacion</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digita la ecuacion"
                            name="ecuacion"
                            onChange={cambioInput}
                            value={valor?.ecuacion}
                        />
                    </div>
                    <div className="mb-3">
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={metodo} onChange={handleChange}>
                            <option selected>Escoge un Metodo</option>
                            <option value={1}>Biseccion</option>
                            <option value={2}>Newton Rapshon</option>
                            <option value={3}>Jacobi</option>
                            <option value={4}>Guss Seidel</option>
                        </select>
                    </div>
                    {isNewton ?
                        <div className="mb-3">
                            <div className="col">
                                <label className="form-label">Valor Inicial a</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digita valor inicial a"
                                    name="iniciala"
                                    onChange={cambioInput}
                                    value={valor?.inicial}
                                ></input>
                            </div>
                            {isBiseccion ?
                                <div className="col">
                                    <label className="form-label">Valor Inicial b</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Digita valor inicial b"
                                        name="inicialb"
                                        onChange={cambioInput}
                                        value={valor?.inicial}
                                    ></input>
                                </div> : ''
                            }
                        </div> : ''
                    }
                    <input type="submit" className="btn btn-success" value="Calcular Metodo"></input>
                </form>
            </div>
            <div className='table-i'>
                {iteraciones.length ? (
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">a</th>
                                    <th scope="col">b</th>
                                    <th scope="col">f(a)</th>
                                    <th scope="col">f(b)</th>
                                    <th scope="col">p</th>
                                    <th scope="col">f(p)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {iteraciones.map((value) => (
                                    <tr>
                                        <th>{value.iteracion}</th>
                                        <th>{value.a}</th>
                                        <th>{value.b}</th>
                                        <th>{value.funcionA}</th>
                                        <th>{value.funcionB}</th>
                                        <th>{value.p}</th>
                                        <th>{value.funcionP}</th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : null}
                {iteracionesR.length ? (
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Xi-1</th>
                                    <th scope="col">f(xi-1)</th>
                                    <th scope="col">f'(xi-1)</th>
                                    <th scope="col">xi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {iteracionesR.map((value) => (
                                    <tr>
                                        <th>{value.iteracion}</th>
                                        <th>{value.xi1}</th>
                                        <th>{value.fxi1}</th>
                                        <th>{value.fxi}</th>
                                        <th>{value.xi}</th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : null}
            </div>
        </>
    )
}


export default Actividad;
