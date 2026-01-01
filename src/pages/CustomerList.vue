<template>
  <q-page class="container q-py-lg">
    <!-- Header -->
    <div class="row items-center justify-between q-mb-lg animated fadeInUp">
      <div>
        <h1 class="text-h3 text-white text-weight-bolder q-my-none">Customers</h1>
        <div class="text-grey-5 q-mt-sm">Manage your client relationships</div>
      </div>
      <q-btn
        icon="add"
        label="Add Customer"
        color="red-accent"
        class="bg-red-accent shadow-red"
        no-caps
        unelevated
        rounded
        @click="showAddCustomer = true"
      />
    </div>

    <!-- Stats Row -->
    <div class="row q-col-gutter-md q-mb-xl animated fadeInUp" style="animation-delay: 0.1s">
      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="bg-glass no-shadow">
          <q-card-section>
            <div class="text-grey-5 text-caption text-uppercase">Total Customers</div>
            <div class="text-h4 text-weight-bolder q-mt-sm text-white">1,240</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="bg-glass no-shadow">
          <q-card-section>
            <div class="text-grey-5 text-caption text-uppercase">Active Members</div>
            <div class="text-h4 text-weight-bolder q-mt-sm text-white">856</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Table Section -->
    <q-card class="bg-glass no-shadow q-pa-sm animated fadeInUp" style="animation-delay: 0.2s">
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
        dark
        class="bg-transparent no-shadow customer-table"
        :filter="filter"
        :pagination="pagination"
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search..."
            color="red-accent"
            input-class="text-white"
            class="bg-dark-search q-px-md rounded-borders"
          >
            <template v-slot:append>
              <q-icon name="search" color="grey-6" />
            </template>
          </q-input>
        </template>

        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
              class="text-grey-6 text-uppercase font-weight-bold"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props" class="customer-row">
            <q-td key="name" :props="props">
              <div class="row items-center">
                <q-avatar size="36px" class="q-mr-md shadow-red-sm">
                  <img :src="props.row.avatar" />
                </q-avatar>
                <div class="text-weight-bold text-white">{{ props.row.name }}</div>
              </div>
            </q-td>
            <q-td key="email" :props="props" class="text-grey-4">
              {{ props.row.email }}
            </q-td>
            <q-td key="status" :props="props">
              <div
                class="status-dot"
                :class="props.row.status === 'Active' ? 'bg-green-5' : 'bg-red-5'"
              ></div>
              <span class="q-ml-sm">{{ props.row.status }}</span>
            </q-td>
            <q-td key="spent" :props="props" class="text-white font-weight-bold">
              ${{ props.row.spent }}
            </q-td>
            <q-td key="actions" :props="props">
              <q-btn flat round dense icon="edit" class="text-grey-5 hover-white" size="sm" />
              <q-btn flat round dense icon="delete" class="text-grey-5 hover-red" size="sm" />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const filter = ref('')
const showAddCustomer = ref(false)
const pagination = ref({
  rowsPerPage: 10,
})

const columns = [
  { name: 'name', required: true, label: 'Customer', align: 'left', field: 'name', sortable: true },
  { name: 'email', align: 'left', label: 'Email', field: 'email', sortable: true },
  { name: 'status', align: 'center', label: 'Status', field: 'status', sortable: true },
  { name: 'spent', align: 'right', label: 'Total Spent', field: 'spent', sortable: true },
  { name: 'actions', align: 'right', label: 'Actions', field: 'actions' },
]

const rows = [
  {
    id: 1,
    name: 'Pathum Senadeera',
    email: 'pathum@example.com',
    status: 'Active',
    spent: '1,200',
    avatar: 'https://cdn.quasar.dev/img/avatar.png',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john@test.com',
    status: 'Inactive',
    spent: '0',
    avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
  },
  {
    id: 3,
    name: 'Alice Smith',
    email: 'alice@domain.com',
    status: 'Active',
    spent: '450',
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
  },
  {
    id: 4,
    name: 'Bob Johnson',
    email: 'bob@network.net',
    status: 'Active',
    spent: '3,100',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
  },
  {
    id: 5,
    name: 'Emma Wilson',
    email: 'emma@tech.io',
    status: 'Active',
    spent: '890',
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
  },
]
</script>

<style lang="scss" scoped>
.bg-glass {
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
}

.bg-dark-search {
  background: rgba(255, 255, 255, 0.05);
}

.customer-table {
  /* Remove default border */
  border: none;

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    background-color: transparent;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
  }
}

.customer-row {
  transition: all 0.2s;
  &:hover {
    background-color: rgba(255, 46, 46, 0.05) !important;
    transform: scale(1.01);
  }
}

.shadow-red-sm {
  box-shadow: 0 0 10px rgba(255, 46, 46, 0.2);
}

.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.hover-white:hover {
  color: white !important;
}
.hover-red:hover {
  color: #ff2e2e !important;
}
</style>
