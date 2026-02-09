import { pgTable, serial, text, varchar, date } from "drizzle-orm/pg-core";



export const patient = pgTable('patients', {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    phone: varchar('phone', { length: 256 }),
    email: varchar('email', { length: 256 }),
    password: varchar('password', { length: 256 })
});

export const doctor = pgTable('doctors', {
    id: serial('id').primaryKey(),
    phone: varchar('phone', { length: 256 }),
    email: varchar('email', { length: 256 }),
    password: varchar('password', { length: 256 }),
    specialty: varchar('specialty', { length: 256 })
})
export const appointment = pgTable('appointment', {
    id: serial('id'),
    doctor_id: serial('doctor_id').references(() => doctor.id),
    patient_id: serial('patient_id').references(() => patient.id),
    date: date('date'),
    status: varchar('status', { length: 256 })
})
