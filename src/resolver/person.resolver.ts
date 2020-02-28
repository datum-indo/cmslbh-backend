import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { Person } from '../graphql.schema';
import { UseGuards } from '@nestjs/common';
import { BatchPayload } from '../prisma/prisma.binding';
// import {MtVocab } from '../prisma/prisma.binding'
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Resolver()
@UseGuards(JwtAuthGuard)
export class PersonResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('persons')
  async getPersons(@Args() args, @Info() info): Promise<Person[]> {
    return await this.prisma.query.persons(args, info);
  }

  @Query('person')
  async getPerson(@Args() args, @Info() info): Promise<Person> {
    return await this.prisma.query.person(args, info);
  }

  @Mutation('createPerson')
  async createPerson(@Args() args, @Info() info): Promise<Person> {
    return await this.prisma.mutation.createPerson(args, info);
  }

  @Mutation('updatePerson')
  async updatePerson(@Args() args, @Info() info): Promise<Person> {
    return await this.prisma.mutation.updatePerson(args, info);
  }
}
