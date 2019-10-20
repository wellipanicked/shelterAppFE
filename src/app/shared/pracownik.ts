import {DanePodstawowe} from "./dane-podstawowe";
import {DaneAdresowe} from "./dane-adresowe";
import {DaneZatrudnienia} from "./dane-zatrudnienia";

export class Pracownik {
  id: number;
  rodzajPracownika: string;
  dodatkoweInformacje: string;
  danePodstawowe: { imie: string; stanowisko: string; nip: string; nazwisko: string; pesel: string; drugie_imie: string; dataUrodzenia: string };
  daneAdresowe: DaneAdresowe;
  daneZatrudnienia: { umowaWaznaDo: string; aktywny: string; dataZatrudnienia: string; dataOdejscia: string };
}
