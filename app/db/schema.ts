import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";



export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    phone: varchar('phone', { length: 256 }),
    email: varchar('email', { length: 256 }),
    password: varchar('password', { length: 256 })
});

export const doctors = pgTable('doctors', {
    id: serial('id').primaryKey(),
    phone: varchar('phone', { length: 256 }),
    email: varchar('email', { length: 256 }),
    password: varchar('password', { length: 256 })
})
export const appointment = pgTable('appointment',{
})
