import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityCreateOrConnectWithoutActivitiesnonlitInput } from "../inputs/CaseProgressActivityCreateOrConnectWithoutActivitiesnonlitInput";
import { CaseProgressActivityCreateWithoutActivitiesnonlitInput } from "../inputs/CaseProgressActivityCreateWithoutActivitiesnonlitInput";
import { CaseProgressActivityWhereUniqueInput } from "../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityCreateNestedOneWithoutActivitiesnonlitInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityCreateWithoutActivitiesnonlitInput, {
    nullable: true
  })
  create?: CaseProgressActivityCreateWithoutActivitiesnonlitInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityCreateOrConnectWithoutActivitiesnonlitInput, {
    nullable: true
  })
  connectOrCreate?: CaseProgressActivityCreateOrConnectWithoutActivitiesnonlitInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityWhereUniqueInput, {
    nullable: true
  })
  connect?: CaseProgressActivityWhereUniqueInput | undefined;
}
