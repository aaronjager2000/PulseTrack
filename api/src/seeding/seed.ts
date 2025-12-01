import { withAccelerate } from '@prisma/extension-accelerate';
import { PrismaClient } from  '../generated/prisma/client'

const prisma = new PrismaClient(
  {
    accelerateUrl: process.env.DATABASE_URL as string,
  }
  ).$extends(withAccelerate());

async function main() {
  const owner = await prisma.user.create({data:
    {
      email: 'owner@owner.com',
      password: 'owner',
      userName: 'owner',
      role: 'OWNER'
    }
  })

  const user = await prisma.user.create({data:
    {
      email: 'test@tesst.com',
      password: 'test',
      userName: 'test',
      role: 'USER'
    }
  })

  const organization = await prisma.organization.create({data:
    {
      leaderId: owner.id,
      name: 'PulseTrack'
    }
  })

  const membership = await prisma.membership.createMany({data:
    [
      {
        userId: owner.id,
        organizationId: organization.id,
        jobTitle: 'Owner',
      },
      {
        userId: user.id,
        organizationId: organization.id,
        jobTitle: 'Employee'
      }
    ]
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
