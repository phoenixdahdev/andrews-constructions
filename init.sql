-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('ADMIN', 'USER', 'CONTRACTOR');

-- CreateEnum
CREATE TYPE "login_status" AS ENUM ('SUCCESS', 'FAILURE');

-- CreateEnum
CREATE TYPE "order_status" AS ENUM ('PENDING', 'APPROVED', 'DELIVERED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "notification_type" AS ENUM ('DEPOSIT_CONFIRMATION', 'WITHDRAWAL_REQUEST', 'WITHDRAWAL_PROCESSED', 'WITHDRAWAL_DENIED', 'INTEREST_PAID', 'FUND_LOCK_EXPIRING', 'SYSTEM_NOTIFICATION', 'MATERIAL_CHANGE', 'SYSTEM_UPDATE');

-- CreateEnum
CREATE TYPE "measurement_type" AS ENUM ('STRUCTURAL_ELEMENT', 'ROOM', 'COMPONENT', 'SPACING', 'THICKNESS', 'TOTAL_THICKNESS', 'OTHER');

-- CreateEnum
CREATE TYPE "material_category" AS ENUM ('STRUCTURAL', 'INSULATION', 'FIRE_PROTECTION', 'MEMBRANE', 'FASTENER', 'SHEATHING', 'SURFACE_MATERIAL', 'OTHER');

-- CreateEnum
CREATE TYPE "classification_type" AS ENUM ('FIRE_RATING', 'ENVIRONMENTAL', 'STANDARDS_COMPLIANCE', 'OTHER');

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "date_joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "time" TEXT,
    "region" TEXT,
    "country" TEXT,
    "last_seen" TIMESTAMP(3),
    "two_step_enabled" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "profile_image" TEXT,
    "role" "user_role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_settings" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "enable_notifications" BOOLEAN NOT NULL DEFAULT true,
    "notify_material_changes" BOOLEAN NOT NULL DEFAULT true,
    "notify_system_updates" BOOLEAN NOT NULL DEFAULT true,
    "theme" TEXT DEFAULT 'light',
    "language" TEXT DEFAULT 'en',

    CONSTRAINT "user_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login_activities" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "login_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "login_status" NOT NULL,
    "ip_address" TEXT,
    "device_info" TEXT,
    "location" TEXT,

    CONSTRAINT "login_activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cad_drawings" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,
    "file_type" TEXT NOT NULL,
    "document_type" TEXT,
    "user_id" UUID NOT NULL,
    "uploaded_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cad_drawings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_info" (
    "id" UUID NOT NULL,
    "drawing_id" UUID NOT NULL,
    "title" TEXT,
    "reference" TEXT,
    "date" TEXT,
    "revision" TEXT,
    "author" TEXT,
    "project" TEXT,
    "client" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "document_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "measurements" (
    "id" UUID NOT NULL,
    "drawing_id" UUID NOT NULL,
    "measurement_type" "measurement_type" NOT NULL,
    "category" TEXT,
    "name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "value" DOUBLE PRECISION,
    "unit" TEXT,
    "x_coordinate" DOUBLE PRECISION,
    "y_coordinate" DOUBLE PRECISION,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "measurements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material_needs" (
    "id" UUID NOT NULL,
    "drawing_id" UUID NOT NULL,
    "material_id" UUID NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "material_needs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materials" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "specification" TEXT,
    "category" "material_category" NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "in_stock" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material_orders" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "material_id" UUID NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,
    "status" "order_status" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "material_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classifications" (
    "id" UUID NOT NULL,
    "drawing_id" UUID NOT NULL,
    "category" "classification_type" NOT NULL,
    "name" TEXT NOT NULL,
    "specification" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "classifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assemblies" (
    "id" UUID NOT NULL,
    "drawing_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "assemblies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "features" (
    "id" UUID NOT NULL,
    "drawing_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "features_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testimonials" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT,
    "company" TEXT,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "type" "notification_type" NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "created_by" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_settings_user_id_key" ON "user_settings"("user_id");

-- CreateIndex
CREATE INDEX "login_activities_user_id_idx" ON "login_activities"("user_id");

-- CreateIndex
CREATE INDEX "cad_drawings_user_id_idx" ON "cad_drawings"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "document_info_drawing_id_key" ON "document_info"("drawing_id");

-- CreateIndex
CREATE INDEX "measurements_drawing_id_idx" ON "measurements"("drawing_id");

-- CreateIndex
CREATE INDEX "material_needs_drawing_id_idx" ON "material_needs"("drawing_id");

-- CreateIndex
CREATE INDEX "material_needs_material_id_idx" ON "material_needs"("material_id");

-- CreateIndex
CREATE INDEX "material_orders_user_id_idx" ON "material_orders"("user_id");

-- CreateIndex
CREATE INDEX "material_orders_material_id_idx" ON "material_orders"("material_id");

-- CreateIndex
CREATE INDEX "classifications_drawing_id_idx" ON "classifications"("drawing_id");

-- CreateIndex
CREATE INDEX "assemblies_drawing_id_idx" ON "assemblies"("drawing_id");

-- CreateIndex
CREATE INDEX "features_drawing_id_idx" ON "features"("drawing_id");

-- CreateIndex
CREATE INDEX "notifications_user_id_idx" ON "notifications"("user_id");

-- AddForeignKey
ALTER TABLE "user_settings" ADD CONSTRAINT "user_settings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login_activities" ADD CONSTRAINT "login_activities_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cad_drawings" ADD CONSTRAINT "cad_drawings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_info" ADD CONSTRAINT "document_info_drawing_id_fkey" FOREIGN KEY ("drawing_id") REFERENCES "cad_drawings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "measurements" ADD CONSTRAINT "measurements_drawing_id_fkey" FOREIGN KEY ("drawing_id") REFERENCES "cad_drawings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_needs" ADD CONSTRAINT "material_needs_drawing_id_fkey" FOREIGN KEY ("drawing_id") REFERENCES "cad_drawings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_needs" ADD CONSTRAINT "material_needs_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "materials"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_orders" ADD CONSTRAINT "material_orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_orders" ADD CONSTRAINT "material_orders_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "materials"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classifications" ADD CONSTRAINT "classifications_drawing_id_fkey" FOREIGN KEY ("drawing_id") REFERENCES "cad_drawings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assemblies" ADD CONSTRAINT "assemblies_drawing_id_fkey" FOREIGN KEY ("drawing_id") REFERENCES "cad_drawings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "features" ADD CONSTRAINT "features_drawing_id_fkey" FOREIGN KEY ("drawing_id") REFERENCES "cad_drawings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

