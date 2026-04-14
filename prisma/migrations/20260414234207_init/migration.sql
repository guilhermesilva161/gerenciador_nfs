-- CreateTable
CREATE TABLE "opers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "service" TEXT NOT NULL,

    CONSTRAINT "opers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notas_fiscais" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "data_recebimento" DATE NOT NULL,
    "data_inicio" DATE,
    "material_recebido" TEXT,
    "status_entrega" TEXT,
    "motivo_parcialidade" TEXT,
    "status" TEXT NOT NULL,
    "data_conclusao" DATE,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "oper_atual_id" INTEGER NOT NULL,

    CONSTRAINT "notas_fiscais_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "notas_fiscais" ADD CONSTRAINT "notas_fiscais_oper_atual_id_fkey" FOREIGN KEY ("oper_atual_id") REFERENCES "opers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
