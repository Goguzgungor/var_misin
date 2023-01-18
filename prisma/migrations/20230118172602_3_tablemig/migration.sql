-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "nodeUrl" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkCase" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "privateKey_1" TEXT,
    "privateKey_2" TEXT,
    "isCaseOpen" BOOLEAN NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "WorkCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userStatus" (
    "id" SERIAL NOT NULL,
    "isReferee" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "userStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_WorkCaseTouserStatus" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_nodeUrl_key" ON "User"("nodeUrl");

-- CreateIndex
CREATE UNIQUE INDEX "userStatus_userId_key" ON "userStatus"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_WorkCaseTouserStatus_AB_unique" ON "_WorkCaseTouserStatus"("A", "B");

-- CreateIndex
CREATE INDEX "_WorkCaseTouserStatus_B_index" ON "_WorkCaseTouserStatus"("B");

-- AddForeignKey
ALTER TABLE "userStatus" ADD CONSTRAINT "userStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WorkCaseTouserStatus" ADD CONSTRAINT "_WorkCaseTouserStatus_A_fkey" FOREIGN KEY ("A") REFERENCES "WorkCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WorkCaseTouserStatus" ADD CONSTRAINT "_WorkCaseTouserStatus_B_fkey" FOREIGN KEY ("B") REFERENCES "userStatus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
