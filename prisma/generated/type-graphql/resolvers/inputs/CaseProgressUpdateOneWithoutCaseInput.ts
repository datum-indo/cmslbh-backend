import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressCreateOrConnectWithoutCaseInput } from "../inputs/CaseProgressCreateOrConnectWithoutCaseInput";
import { CaseProgressCreateWithoutCaseInput } from "../inputs/CaseProgressCreateWithoutCaseInput";
import { CaseProgressUpdateWithoutCaseInput } from "../inputs/CaseProgressUpdateWithoutCaseInput";
import { CaseProgressUpsertWithoutCaseInput } from "../inputs/CaseProgressUpsertWithoutCaseInput";
import { CaseProgressWhereUniqueInput } from "../inputs/CaseProgressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressUpdateOneWithoutCaseInput {
  @TypeGraphQL.Field(_type => CaseProgressCreateWithoutCaseInput, {
    nullable: true
  })
  create?: CaseProgressCreateWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressCreateOrConnectWithoutCaseInput, {
    nullable: true
  })
  connectOrCreate?: CaseProgressCreateOrConnectWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressUpsertWithoutCaseInput, {
    nullable: true
  })
  upsert?: CaseProgressUpsertWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressWhereUniqueInput, {
    nullable: true
  })
  connect?: CaseProgressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CaseProgressUpdateWithoutCaseInput, {
    nullable: true
  })
  update?: CaseProgressUpdateWithoutCaseInput | undefined;
}
