import React from 'react';

function PayloadCard({ Comments }) {
    // console.log(Comments)

    return (
        <div className="payload__card">
            {
                Comments.map((item, id) => {
                    return (
                        <div className="product" key={id}>
                            <h3 className="product__top">{item.payload_id}</h3>
                            <div className="product__body">
                                <p>Customers:{item.customers}</p>
                                <p>Nationality:{item.nationality}</p>
                                <p>Manufacturer:{item.manufacturer}</p>
                                <p>Payload-Type:{item.payload_type}</p>
                                <p>Payload-Mass/kg:{item.payload_mass_kg}</p>
                                <p>Payload-Mass/lbs:{item.payload_mass_lbs}</p>
                                <p>Orbit:{item.orbit}</p>
                            </div>
                            <h4>Orbit Parameters</h4>

                            <p>Reference-System:{item.orbit_params.reference_system}</p>
                            <p>Regime:{item.orbit_params.regime}</p>
                            <p>Periapsis/km:{item.orbit_params.periapsis_km}</p>
                            <p>Apoapsis/km:{item.orbit_params.apoapsis_km}</p>
                            <p>Inclination/deg:{item.orbit_params.inclination_deg}</p>
                        </div>
                    )
                })
            }



        </div>
    )
}

export default PayloadCard
