import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutActivitiesInput } from "../inputs/RenamedcaseCreateOrConnectWithoutActivitiesInput";
import { RenamedcaseCreateWithoutActivitiesInput } from "../inputs/RenamedcaseCreateWithoutActivitiesInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutActivitiesInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutActivitiesInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutActivitiesInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
