import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityCreateOrConnectWithoutActivitieslitInput } from "../inputs/CaseProgressActivityCreateOrConnectWithoutActivitieslitInput";
import { CaseProgressActivityCreateWithoutActivitieslitInput } from "../inputs/CaseProgressActivityCreateWithoutActivitieslitInput";
import { CaseProgressActivityWhereUniqueInput } from "../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityCreateNestedOneWithoutActivitieslitInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityCreateWithoutActivitieslitInput, {
    nullable: true
  })
  create?: CaseProgressActivityCreateWithoutActivitieslitInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityCreateOrConnectWithoutActivitieslitInput, {
    nullable: true
  })
  connectOrCreate?: CaseProgressActivityCreateOrConnectWithoutActivitieslitInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityWhereUniqueInput, {
    nullable: true
  })
  connect?: CaseProgressActivityWhereUniqueInput | undefined;
}
