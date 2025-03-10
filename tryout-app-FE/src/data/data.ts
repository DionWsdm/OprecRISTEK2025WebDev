class TryOut {
    id: string;
    judul: string;
    mapel: string;
    tanggal_dibuat: string;
    tanggal_pelaksanaan: string;
    waktu: string;
    jumlahSoal: number;

    public constructor(id: string, judul: string, mapel: string, tanggal_dibuat: string, tanggal_pelaksanaan: string, waktu: string, jumlahSoal: number)
    {
        this.id = id;
        this.judul = judul;
        this.mapel = mapel;
        this.tanggal_dibuat = tanggal_dibuat;
        this.tanggal_pelaksanaan = tanggal_pelaksanaan;
        this.waktu = waktu;
        this.jumlahSoal = jumlahSoal;
    }
}

const tryouts: TryOut[] = [
    new TryOut("1", "Try Out 1 Matematika", "Matematika", "03-07-2025", "03-10-2025", "10.00-12.00", 15),
    new TryOut("2", "Try Out 1 Fisika", "Fisika", "03-05-2025","03-11-2025", "13.00-15.00", 20),
    new TryOut("3", "Try Out 2 Biologi", "Biologi", "03-06-2025","03-12-2025", "08.00-09.30", 25)
];

export {tryouts};