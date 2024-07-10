interface VehicleProps {
  vehicles: string[];
}

export default function Vehicles({ vehicles }: VehicleProps) {
  return (
    <div>
      {vehicles.map((vehicle: string) => {
        return (
          <div className="media">
            <div className="media-left">
              <a href="#">
                <img className="media-object" src="..." alt="..."></img>
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{vehicle}</h4>
              ...
            </div>
          </div>
        );
      })}
    </div>
  );
}
