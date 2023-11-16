// function songs(array) {
//     class Song {
//         constructor(typeList, name, time) {
//             this.typeList = typeList;
//             this.name = name;
//             this.time = time;
//         }

//         printName(typeSong) {
//             if (this.typeList === typeSong || lfSong === "all") {
//                 console.log(this.name);
//             }
//         }
//     }

//     let songs = array.shift();
//     let lfSong = array.pop();

//     for (let i = 0; i < songs; i++) {
//         let [type, name, time] = array[i].split("_");
//         let song = new Song(type, name, time);
//         song.printName(lfSong);

//     }
// }

function songs(array) {
    const song = (typeList, name, time) => {
        return {
            typeList, name, time,
            printName: (lastType) => {
                if (typeList === lastType || lastType === "all") {
                    console.log(name);
                }
            }
        }
    }

    array.shift();
    let lastType = array.pop();
    array.forEach(x => song(...x.split("_")).printName(lastType));
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);