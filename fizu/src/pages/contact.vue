<template>
    <div>
        <div class="container my-5">
            <h2 class="mb-4">Kapcsolat</h2>
            <form>
                <div class="row">

                    <div class="form-group col-12 col-md-6">
                        <label for="inputName">Név</label>
                        <input type="email" class="form-control" id="inputName" >
                    </div>

                    <div class="form-group col-12 col-md-6">
                        <label for="inputEmail">Email cím</label>
                        <input type="email" class="form-control" id="inputEmail">
                    </div>

                    <div class="form-group col-12">
                        <label for="inputMessage">Üzenet</label>
                        <textarea class="form-control" id="inputMessage" rows="3"></textarea>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary mb-2" @click.prevent>Küldés</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {}
</script>