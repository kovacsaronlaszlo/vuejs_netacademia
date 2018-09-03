<template>

    <div class="row py-5 mx-4 ">
        <div class="col-12 col-md-7 py-md-3">
            <p>Neme</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                <label class="form-check-label" for="inlineRadio1">Férfi</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                <label class="form-check-label" for="inlineRadio2">Nő</label>
            </div>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Hány éves?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
                <option selected>Válassz</option>
                <option value="1">14</option>
                <option value="2">15</option>
                <option value="3">16</option>
                <option value="4">17</option>
                <option value="5">18</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Melyik megyében végzi a munkáját?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
                <option selected>Válassz</option>
                <option value="1">Bács-Kiskun megye</option>
                <option value="2">Csongrád megye</option>
                <option value="3">Fejér megye</option>
                <option value="4">Jász-Nagykun-Szolnok megye</option>
                <option value="5">Hajdú-Bihar megye</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Melyik településen végzi a munkáját?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
                <option selected>Válassz</option>
                <option value="1">Cegléd</option>
                <option value="2">Szeged</option>
                <option value="3">Szombathely</option>
                <option value="4">Kecskemét</option>
                <option value="5">Pécs</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Mennyi a havi bruttó keresete?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <input type="number" class="form-control" id="validationDefault03" placeholder="" required>
                </div>
            </div>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Melyik ágazatban dolgozik?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
                <option selected>Válassz</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Milyen munkakörben dolgozik?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
                <option selected>Válassz</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Mi a fő munkaviszonya?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
                <option selected>Válassz</option>
                <option value="1">Alkalmazott</option>
                <option value="2">Közalkalmazott</option>
                <option value="3">Családi vállakozás tagja</option>
                <option value="3">Vállalkozó alkalmazottakkal</option>
                <option value="3">Vállalkozó alkalmazottak nélkül</option>
                <option value="3">Gyakornok</option>
                <option value="3">Diák</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Milyen iskolai végzettséggel rendelkezik?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
                <option selected>Válassz</option>
                <option value="1">Alapfokú</option>
                <option value="2">Középfokú</option>
                <option value="3">Felsőfokú</option>
                <option value="3">PhD</option>
                <option value="3">Vállalkozó alkalmazottak nélkül</option>
                <option value="3">Gyakornok</option>
                <option value="3">Diák</option>
            </select>
        </div>

        <div class="col text-center mt-5">
            <button class="btn btn-outline-success" type="submit">Elküldöm</button>
        </div>
    </div>

</template>
<script>
export default {};
</script>