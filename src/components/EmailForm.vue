<script>

export default {
    name: 'EmailForm',
    props: {
        isError: Boolean,
        isSent: Boolean,
        form: Object
    },
    emits: ['closeError', 'closeSent', 'sendEmail']
}
</script>

<template>
    <div>
        <div v-if="isError" class="alert alert-danger d-flex align-items-center alert-box">
            <p class="d-inline me-3 mb-0">Errore</p>
            <button @click="$emit('closeError')" type="button" class="btn-close close-box" aria-label="Close"></button>
        </div>
        <div v-if="isSent" class="alert alert-success d-flex align-items-center alert-box">
            <p class="d-inline me-3 mb-0">Mail Inviata</p>
            <button @click="$emit('closeSent')" type="button" class="btn-close close-box" aria-label="Close"></button>
        </div>
        <h5>Contatta il proprietario per avere più informazioni</h5>
        <form @submit.prevent="$emit('sendEmail', form), emptyForm">
            <div class="row g-2 d-flex align-items-center justify-content-center flex-column">
                <!-- Nome -->
                <div class="col">
                    <label for="first_name" class="form-label">Nome <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="first_name" placeholder="es: Mario"
                        v-model="form.first_name" required>
                </div>
                <!-- Cognome -->
                <div class="col">
                    <label for="last_name" class="form-label">Cognome <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="last_name" placeholder="es: Rossi"
                        v-model="form.last_name" required>
                </div>
                <!-- Email -->
                <div class="col">
                    <label for="email_sender" class="form-label">Indirizzo email <span
                            class="text-danger">*</span></label>
                    <input type="email" class="form-control" id="email_sender" placeholder="es: mario.rossi@gmail.com"
                        v-model="form.email_sender" required>
                </div>
                <!-- Messaggio -->
                <div class="col">
                    <label for="text" class="form-label">Scrivi il tuo messaggio <span
                            class="text-danger">*</span></label>
                    <textarea class="form-control" id="text" rows="10" v-model="form.text" required></textarea>
                </div>
            </div>
            <button type="submit" class="btn btn-success mt-2">Invia</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.alert-box {
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
}

.close-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
}
</style>
