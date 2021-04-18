import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutWakilIdInput } from "../inputs/ApplicationCreateWithoutWakilIdInput";
import { ApplicationUpdateWithoutWakilIdInput } from "../inputs/ApplicationUpdateWithoutWakilIdInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationUpsertWithWhereUniqueWithoutWakilIdInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutWakilIdInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutWakilIdInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutWakilIdInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutWakilIdInput;
}
