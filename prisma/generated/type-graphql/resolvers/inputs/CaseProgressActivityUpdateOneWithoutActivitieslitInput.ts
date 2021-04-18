import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityCreateOrConnectWithoutActivitieslitInput } from "../inputs/CaseProgressActivityCreateOrConnectWithoutActivitieslitInput";
import { CaseProgressActivityCreateWithoutActivitieslitInput } from "../inputs/CaseProgressActivityCreateWithoutActivitieslitInput";
import { CaseProgressActivityUpdateWithoutActivitieslitInput } from "../inputs/CaseProgressActivityUpdateWithoutActivitieslitInput";
import { CaseProgressActivityUpsertWithoutActivitieslitInput } from "../inputs/CaseProgressActivityUpsertWithoutActivitieslitInput";
import { CaseProgressActivityWhereUniqueInput } from "../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityUpdateOneWithoutActivitieslitInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityCreateWithoutActivitieslitInput, {
    nullable: true
  })
  create?: CaseProgressActivityCreateWithoutActivitieslitInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityCreateOrConnectWithoutActivitieslitInput, {
    nullable: true
  })
  connectOrCreate?: CaseProgressActivityCreateOrConnectWithoutActivitieslitInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityUpsertWithoutActivitieslitInput, {
    nullable: true
  })
  upsert?: CaseProgressActivityUpsertWithoutActivitieslitInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityWhereUniqueInput, {
    nullable: true
  })
  connect?: CaseProgressActivityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityUpdateWithoutActivitieslitInput, {
    nullable: true
  })
  update?: CaseProgressActivityUpdateWithoutActivitieslitInput | undefined;
}
