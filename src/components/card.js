function Card(props) {
    return (
        <div className="col-md-4">
            <div className="card-border">
                <img src= {props.imageName} className="card-image" height={300}/>
                <div className="card-b0dy">
                    <div className="card-tittle"> this is a good news</div>
                    <div className="card-text">
                        lhsdcdckksd ds jk jks
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary">Readmore</button>
                    </div>

                </div>

            </div>
        </div>

    );
};
export default Card;