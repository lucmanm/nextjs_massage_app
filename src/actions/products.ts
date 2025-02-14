import { prisma } from '@/lib/db'

export async function getProducts() {
    const products = await prisma.product.findMany({ include: { images: true } })

    return products
}
