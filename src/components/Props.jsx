import React, { Fragment } from 'react'

const Props = ({sujeto}) => {
    return (
        
        <Fragment>
            <div className="">
            <hr />
            <h4 className="display-4 text-center">Comentarios</h4>
            <hr />
            <div className="container border">
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                            <img src={sujeto.url} alt="..."/>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h4>{sujeto.nombre}</h4>
                            {sujeto.texto}
                        </div>
                        </div>
                    </div>
            </div>
        </Fragment>
        
        
        )
}

export default Props
