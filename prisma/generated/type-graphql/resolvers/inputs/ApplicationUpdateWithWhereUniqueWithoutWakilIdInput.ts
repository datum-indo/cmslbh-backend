import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationUpdateWithoutWakilIdInput } from "../inputs/ApplicationUpdateWithoutWakilIdInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationUpdateWithWhereUniqueWithoutWakilIdInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutWakilIdInput, {
    nullable: false
  })
  data!: ApplicationUpdateWithoutWakilIdInput;
}
