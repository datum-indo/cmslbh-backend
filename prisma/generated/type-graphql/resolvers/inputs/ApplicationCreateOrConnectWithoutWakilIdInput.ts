import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutWakilIdInput } from "../inputs/ApplicationCreateWithoutWakilIdInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationCreateOrConnectWithoutWakilIdInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutWakilIdInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutWakilIdInput;
}
