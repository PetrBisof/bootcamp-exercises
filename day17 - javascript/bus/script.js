class Bus {
    constructor(direction, stations, seats, passengers, last_station) {
        this.direction = direction;
        this.stations = stations;
        this.seats = seats;
        this.passengers = passengers;
        this.last_station = last_station;
  
    }

    current() {
        return this.last_station
    }

    next() {
        this.stations = [];
        if(this.direction === 'Prague-Wien'){
            return this.stations[this.last_station + 1];
        }
        else{
            return this.stations[this.last_station - 1];
        }
    }

    board(count){
        if(count + this.seats > this.seats){
            return this.seats
        }
        else{
            return count + this.seats
        }
    }

    unboard(count) {
            if(count > this.passengers){
                return this.passengers = 0;
            }
            else{
                return this.passengers - count;
            }
    }
}

const Autobus = new Bus('Prague-Wien', ['Praha', 'Jihlava', 'Brno', 'Břeclav', 'Vídeň'], 60, 120, 3);


console.log(Autobus.next());

/* 
current() returns the name of the station the bus last stopped in
next() sets the last_station index to the next station,
board(count) board count new passengers to the bus. If the number of passenger would be greater the the number of seats after calling this method, just board only as many to fit in the bus.
uboard(count) unboard count passengers from the bus. If the count is greater then the number of passengers in the bus just unboard those that are inside. */