// import {
//     Args,
//     Info,
//     Mutation,
//     Query,
//     Resolver,
// } from '@nestjs/graphql';
// import { Ctx } from 'type-graphql';
// import { PrismaService } from '../prisma.service';
// import { PrismaClient } from '@prisma/client';


// @Resolver()
// export class UserResolver {
//     constructor(private readonly prisma: PrismaService) { }

//     @Query('users')
//     async getUsers(@Ctx() { prisma }, @Info() info?): Promise<User[]> {
//         // console.log(JSON.stringify(args));
//         return await this.prisma.query.users(args, info);
//     }

//     @Query('user')
//     async getUser(@Args() args, @Info() info): Promise<User> {
//         return await this.prisma.query.user(args, info);
//     }

//     @Mutation('createUser')
//     async createUser(@Args() args, @Info() info): Promise<User> {
//         return await this.prisma.mutation.createUser(args, info);
//     }

//     @Mutation('updateUser')
//     async updateUser(@Args() args, @Info() info): Promise<User> {
//         return await this.prisma.mutation.updateUser(args, info);
//     }
// }
