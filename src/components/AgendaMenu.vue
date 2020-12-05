<template>
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">List Menu</h3>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="">daftar Makanan</label>
                    <input type="text" v-model="agenda.makanan" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="">daftar Minuman</label>
                    <input type="text" v-model="agenda.minuman" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="">Total Harga</label>
                    <input type="text" v-model="agenda.harga" class="form-control"  required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-lg btn-block" :disabled="isLoading" @click.prevent="simpan">
                       {{ isLoading ? 'Loading...':'Tambahkan'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

 <script>
        export default {
            name: 'AgendaMenu',
            data() {
                return {
                    agenda: {
                        hari: '',
                        kegiatan: ''
                    }
                }
            },
            methods: {
                simpan() {
                   this.$store.dispatch('simpanAgenda', this.agenda)
                   this.agenda = {
                       hari: '',
                       kegiatan: ''
                   } 
                }
            },
            computed : {
                isLoading() {
                    return this.$store.state.isLoading
                }
            }
        }
</script>