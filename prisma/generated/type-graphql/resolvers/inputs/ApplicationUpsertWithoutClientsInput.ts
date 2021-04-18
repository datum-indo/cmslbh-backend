import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutClientsInput } from "../inputs/ApplicationCreateWithoutClientsInput";
import { ApplicationUpdateWithoutClientsInput } from "../inputs/ApplicationUpdateWithoutClientsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationUpsertWithoutClientsInput {
  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutClientsInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutClientsInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutClientsInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutClientsInput;
}
