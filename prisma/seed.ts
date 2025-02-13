import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();



async function main() {
    // Seed data for StoreCode
    await prisma.storeCode.create({
        data: { code: "0552449592" },
    });

    // Seed data for StoreImages
    await prisma.storeImages.createMany({
        data: [
            { name: "Logo", logoUrl: null },
            { name: "Company Logo", logoUrl: null },
            { name: "Icon Logo", logoUrl: null },
            { name: "Tax Logo", logoUrl: null },
            { name: "Footer Logo", logoUrl: null },
        ],
    });

    // Seed data for SocialMedia
    await prisma.socialMedia.createMany({
        data: [
            {
                name: "Facebook",
                imageUrl: "https://res.cloudinary.com/dzdcszrob/image/upload/v1734254258/icons/png/k4kra2ghupnlbxchp4nb.png",
                url: "https://facebook.com",
            },
            {
                name: "Twitter",
                imageUrl: "https://res.cloudinary.com/dzdcszrob/image/upload/v1734254258/icons/png/k4kra2ghupnlbxchp4nb.png",
                url: "https://twitter.com",
            },
            {
                name: "Instagram",
                imageUrl: "https://res.cloudinary.com/dzdcszrob/image/upload/v1734254258/icons/png/hhujllac6zbtcjthruqf.png",
                url: "https://instagram.com",
            },
        ],
    });

    // Seed data for PaymentGateway
    await prisma.paymentGateway.createMany({
        data: [
            { name: "Visa", imageUrl: null },
            { name: "Mada", imageUrl: null },
            { name: "Tamara", imageUrl: null },
            { name: "Tabby", imageUrl: null },
        ],
    });
}



const hashedPassword = await bcrypt.hash("258963147", 10);

await prisma.user.create({
    data: {
        name: "lucmanm",
        email: "lucmanm@icloud.com",
        password: hashedPassword,
        role: "ADMIN",
    },
});

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
